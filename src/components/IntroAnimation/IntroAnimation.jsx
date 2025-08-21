import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./IntroAnimation.css";

export default function IntroAnimation() {
  const svgRef = useRef(null);
  const strokeRef = useRef(null);
  const maskTextRef = useRef(null);
  const maskGroupRef = useRef(null);
  const introWrapRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const strokeText = strokeRef.current;
    const maskText = maskTextRef.current;
    const maskGroup = maskGroupRef.current;
    const introWrap = introWrapRef.current;

    // ----- CONFIG (kept identical to your HTML) -----
    const strokeDuration = 3.5;   // drawing time (seconds)
    const zoomDuration = 2.0;     // total zoom time (seconds)
    const bruteScale = 150;       // huge zoom
    const overshootFactor = 1.06; // (computed but not used in final zoom in this version)
    const holeOffsetX = 0.12;     // nudge X (fraction of char width)
    const holeOffsetY = -0.04;    // nudge Y (fraction of char height)

    const label = "eCell NSUT";
    const targetChar = "e";
    function findOccurrence(str, char, occurrence = 2) {
      let idx = -1, count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
          count++;
          if (count === occurrence) { idx = i; break; }
        }
      }
      if (idx === -1) idx = str.indexOf(char);
      return idx === -1 ? 0 : idx;
    }
    const targetIndex = findOccurrence(label, targetChar, 2);

    // sync DOM text nodes
    strokeText.textContent = label;
    maskText.textContent = label;

    // set viewBox to window pixels so getExtentOfChar / getComputedTextLength give pixel values
    function setSVGViewBoxToWindow(){
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (svg) svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    }
    setSVGViewBoxToWindow();
    window.addEventListener("resize", setSVGViewBoxToWindow);

    // stroke-draw setup (same approach as your original)
    const len = (strokeText && strokeText.getComputedTextLength) ? strokeText.getComputedTextLength() : 1200;
    // apply initial stroke-dash styles
    strokeText.style.strokeDasharray = `${len}`;
    strokeText.style.strokeDashoffset = `${len}`;
    strokeText.style.opacity = "1";

    // compute character bbox with fallback (same logic)
    function computeCharBBox(index){
      try {
        const ext = maskText.getExtentOfChar(index);
        return { x: ext.x, y: ext.y, width: ext.width, height: ext.height };
      } catch (e) {
        const b = maskText.getBBox();
        return {
          x: b.x + b.width * 0.08,
          y: b.y + b.height * 0.15,
          width: b.width * 0.18,
          height: b.height * 0.7
        };
      }
    }

    // Get bbox and nudged center
    const viewport = { w: window.innerWidth, h: window.innerHeight };
    const charBBox = computeCharBBox(targetIndex);
    let charCenterX = charBBox.x + charBBox.width / 2;
    let charCenterY = charBBox.y + charBBox.height / 2;
    // nudge toward the glyph's hole
    charCenterX += holeOffsetX * charBBox.width;
    charCenterY += holeOffsetY * charBBox.height;

    const viewportCenter = { x: viewport.w / 2, y: viewport.h / 2 };

    // compute translate for brute-scale (same formula as you had)
    const tx = viewportCenter.x - bruteScale * charCenterX;
    const ty = viewportCenter.y - bruteScale * charCenterY;
    const overshootScale = bruteScale * overshootFactor;
    const txOvershoot = viewportCenter.x - overshootScale * charCenterX;
    const tyOvershoot = viewportCenter.y - overshootScale * charCenterY;

    // ensure deterministic start transform
    maskGroup.setAttribute("transform", `translate(0 0) scale(1)`);

    // Build timeline (exact same sequence & position labels as your original)
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tlRef.current = tl;

    // 1) DRAW stroke
    tl.to(strokeText, { strokeDashoffset: 0, duration: strokeDuration, ease: "power1.inOut",onComplete: () => {
        console.log("stroke complete")
      } });

    // small pause (empty tween)
    tl.to({}, { duration: 0.18 });

    // 2) fade stroke out (starts with previous)
    tl.to(strokeText, { opacity: 0, duration: 0.5 }, "<");

    // 3) mask text => knockout (starts at previous start + 0.04)
    tl.to(maskText, { attr: { "fill-opacity": 1 }, duration: 0.55 }, "<+=0.04");

    // compute final transform strings (as in your file)
    const finalTransform = `translate(${tx} ${ty}) scale(${bruteScale})`;

    // 4) zoom (starts after previous ends, i.e. ">" )
    tl.to(maskGroup, { attr: { transform: finalTransform }, duration: zoomDuration, ease: "power4.inOut" }, ">");

    // Fade overlay starts at previous start + zoomDuration * 0.4  (your `<+=${zoomDuration * 0.4}`)
    // and lasts zoomDuration * 0.2
    const fadeStartOffset = zoomDuration * 0.4; // 0.8s
    const fadeDuration = zoomDuration * 0.2;    // 0.4s
    tl.to(introWrap, {
      opacity: 0,
      duration: fadeDuration,
      ease: "power2.out",
      onComplete: () => {
        // hide it (same as your original)
        introWrap.style.display = "none";
        introWrap.style.pointerEvents = "none";
      }
    }, `<+=${fadeStartOffset}`);

    // cleanup on unmount
    return () => {
      // kill timeline if still active and remove resize listener
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      window.removeEventListener("resize", setSVGViewBoxToWindow);
    };
  }, []); // run once on mount

  // Render the same SVG structure; note refs wired to elements
  return (
    <div id="intro-wrap" ref={introWrapRef}>
      <svg id="intro-svg" ref={svgRef} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <mask id="text-mask" maskUnits="userSpaceOnUse">
            <rect id="mask-bg" x="0" y="0" width="100%" height="100%" fill="white" />
            <g id="maskGroup" ref={maskGroupRef}>
              <text id="maskText"
                ref={maskTextRef}
                x="50%" y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Poppins, Roboto, Arial, sans-serif"
                fontWeight="900"
                fontSize="100"
                fill="black"
                letterSpacing="3"
                fillOpacity="0"
              >
                eCell NSUT
              </text>
            </g>
          </mask>
        </defs>

        <g id="overlayWrapper">
          {/* corrected color to #000000 (valid black) */}
          <rect id="overlayRect" x="0" y="0" width="100%" height="100%" fill="#000000" mask="url(#text-mask)"></rect>
        </g>

        <text id="strokeText"
          ref={strokeRef}
          x="50%" y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Poppins, Roboto, Arial, sans-serif"
          fontWeight="900"
          fontSize="100"
          fill="none"
          stroke="#Fc9834"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          letterSpacing="3"
          style={{ paintOrder: "stroke" }}
        >
          eCell NSUT
        </text>
      </svg>
    </div>
  );
}
