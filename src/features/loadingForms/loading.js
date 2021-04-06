import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
      <section>

        <ul className="list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                 <h4 className="card-title">
                <Skeleton circle={true} height={50} width={50} />  
                <p className="card-channel">
                  <Skeleton width={`90%`} />
                </p>
                </h4>
                <Skeleton height={260} />
              </li>
            ))}
        </ul>
      </section>
    );
  };
  export default SkeletonCard;