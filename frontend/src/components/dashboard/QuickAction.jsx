import { Link } from "react-router-dom";

function QuickAction({
  title,

  description,

  icon,

  link,

  color,
}) {
  return (
    <Link
      to={link}
      className="
            bg-white
            rounded-3xl
            shadow-lg
hover:shadow-2xl
transition-all
duration-300
            p-6
            hover:shadow-lg
hover:shadow-2xl
transition-all
duration-300-xl
            transition"
    >
      <div
        className="
                h-14
                w-14
                rounded-full
                flex
                items-center
                justify-center
                text-white
                mb-5"
        style={{
          background: color,
        }}
      >
        {icon}
      </div>

      <h2 className="font-bold text-xl">{title}</h2>

      <p className="text-slate-500 mt-2">{description}</p>
    </Link>
  );
}

export default QuickAction;
