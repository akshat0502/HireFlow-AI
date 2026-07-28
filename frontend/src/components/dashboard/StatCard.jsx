function StatCard({
  title,

  value,

  icon,

  color,
}) {
  return (
    <div
      className="
            bg-white
            rounded-3xl
            shadow-lg
hover:shadow-2xl
transition-all
duration-300-md
            p-6
            flex
            justify-between
            items-center
            hover:shadow-lg
hover:shadow-2xl
transition-all
duration-300-xl
            transition"
    >
      <div>
        <p className="text-slate-500">{title}</p>

        <h2 className="text-4xl font-bold mt-2">{value}</h2>
      </div>

      <div
        className="
                h-16
                w-16
                rounded-full
                flex
                items-center
                justify-center
                text-white"
        style={{
          background: color,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;
