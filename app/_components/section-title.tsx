interface SectionTitleProps {
  title: string;
  description: string;
  align?: 'center' | 'start' | 'end';
}

const SectionTitle = ({ title, description, align = 'center' }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col gap-1 mb-10 text-${align}`}>
      <h2 className="uppercase text-primary font-bold text-xl tracking-widest">{title}</h2>
      <p className="text-3xl text font-bold text-black">{description}</p>
    </div>
  );
}

export default SectionTitle;