export const Work = ({ image, title, role, date }) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <img
        src={image}
        alt={title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <p className="text-lg font-semibold">
          {title}
          <span className="text-sm text-muted-foreground"> - {role}</span>
        </p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};
