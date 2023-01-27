function Radio({ label, name, value, onChange = () => {}, leftDockLabel, mb }) {
  return (
    <label
      className="text-h5 group block relative select-none cursor-pointer"
      style={{
        paddingLeft: leftDockLabel,
        marginBottom: mb,
      }}
    >
      {label}

      {/* Hide the browser's default checkbox */}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="peer absolute opacity-0 cursor-pointer h-0 w-0"
      />

      {/* Create custom checkmark */}
      <span className="group-hover:bg-[#ccc] peer-checked:border-t_dark peer-checked:bg-t_dark rounded-full absolute top-[2px] left-0 w-4 h-4 border border-solid border-t_light_gray_3 bg-transparent"></span>
    </label>
  );
}

export default Radio;
