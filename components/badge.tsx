const Badge = () => {
  return (
    <div className="flex items-center w-fit border rounded-full px-4 py-2 gap-2 text-[11px] md:text-sm">
      <span className="animate-pulse w-2 h-2 bg-primary rounded-full"></span>
      24 Hour Flash Sale -{" "}
      <span className="text-primary px-1">70% off for first 100 users</span>
    </div>
  );
};

export default Badge;
