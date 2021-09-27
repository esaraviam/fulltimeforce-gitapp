import React from "react";

export const ErrorAlert = ({ title, message }) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-3"
      role="alert"
    >
      <p className="font-bold" data-testid="ErrorAlert-title">
        {title}
      </p>
      <p className="text-sm " data-testid="ErrorAlert-message">
        {message}
      </p>
    </div>
  );
};
