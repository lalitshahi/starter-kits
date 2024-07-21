const Feature = () => {
  return (
    <div className="flex flex-row p-10 md:p-24">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold">
          Gain A Deeper Understanding Of Your Business Finances
        </h2>
        <p>
          Our tool provides comprehensive financial analysis, helping you make
          informed decisions. Get a clearer picture of your financial health.
        </p>
        <div>
          <p>Detailed financial data and insights at your fingertips.</p>
          <p>Real-time tracking of expenses and revenue.</p>
          <p>Customized reports to suit your business needs.</p>
        </div>
      </div>
      <div className="w-full"></div>
      {/* <marquee width="60%" direction="left" height="100px">
        This is a sample scrolling text that has scrolls in the upper direction.
      </marquee> */}
    </div>
  );
};

export default Feature;
