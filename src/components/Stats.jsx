import React from 'react';
import { stats } from '../constants';
import styles from '../style';
import CountUp from './CountUp';

const Stats = () => (
  <section
    className={`${styles.flexCenter} w-full max-w-6xl mx-auto mt-8 sm:mt-16 sm:mb-16 mb-6 px-4 sm:px-8 lg:px-12`}
  >
    <div
      className="
        grid gap-6 sm:gap-8
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
        w-full
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center text-center"
        >
          {/* number wrapper with tabular alignment */}
          <div
            className="w-full text-center"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <CountUp
              from={0}
              to={stat.value}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text font-poppins font-semibold 
                text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] 
                leading-[28px] sm:leading-[36px] lg:leading-[48px] 
                text-white"
            />
          </div>

          <p
            className="font-poppins font-medium mt-2
              text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
              leading-[16px] sm:leading-[20px] lg:leading-[24px] 
              text-white"
          >
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
