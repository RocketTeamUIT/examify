function SideItem({ content }) {
  return (
    <div
      className="table-para-css border rounded border-t_gray p-3 xl:p-5 text-md"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></div>
  );
}

export default SideItem;
