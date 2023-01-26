function Checkbox({ label, leftDockLabel, mb, onClick }) {
  return (
    <label
      className="group block relative select-none cursor-pointer"
      style={{
        paddingLeft: leftDockLabel,
        marginBottom: mb,
      }}
    >
      {label}

      {/* Hide the browser's default checkbox */}
      <input type="checkbox" className="peer absolute opacity-0 cursor-pointer h-0 w-0" onClick={onClick} />

      {/* Create custom checkmark */}
      <span className="group-hover:bg-[#ccc] peer-checked:border-[#0000ff] peer-checked:bg-[#0000ff] peer-checked:after:block rounded absolute top-[1.5px] left-0 w-4 h-4 border-[0.5px] border-solid border-[#dddddd] bg-transparent after:content-[''] after:absolute after:hidden after:left-[5.5px] after:top-[2.5px] after:w-[4px] after:h-[9px] after:border-solid after:border-r-[2px] after:border-b-[2px] after:border-white after:rotate-45"></span>
    </label>
  );
}

export default Checkbox;
