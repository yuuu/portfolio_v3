import React from "react";

type Props = {
  title: string;
};

export const SubHeader: React.FC<Props> = (props) => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold leading-tight text-gray-900">
        {props?.title}
      </h2>
    </div>
  );
};

export default SubHeader;
