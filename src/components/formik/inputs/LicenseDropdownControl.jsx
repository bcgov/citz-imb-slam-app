/**
 * @description Component used to populate options of Assigned Licenses in the add Licensee page
 * @param {Object}  props Contains title of software, how many are used (assigned), total licenses owned
 * @returns React component.
 */

export const LicenseDropdownControl = (props) => {
  const { title, used, total } = props;

  function remainingStyle() {
    // Default style
    let style = {
      color: '#222',
      fontWeight: 400,
    };

    // If no more available licenses, change style.
    if (used >= total) {
      style = {
        color: '#d33c40',
        fontWeight: 600,
      };
    }

    return style;
  }

  return (
    <>
      <span>{title}</span>
      <span style={remainingStyle()}>{`  (${used} / ${total})`}</span>
    </>
  );
};
