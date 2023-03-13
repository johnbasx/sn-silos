import React from "react";

const LoadingTranslations = ({ ready }: { ready: boolean }) => {
  if (!ready)
    return (
      <>
        <p>Loading translations...</p>
      </>
    );
  return <></>;
};

export default LoadingTranslations;
