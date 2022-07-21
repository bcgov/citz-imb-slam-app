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
        color: '#b5b5b5',
        fontWeight: 400,
      };
    }

    return style;
  }

  return (
    <span style={remainingStyle()}>
      {`${title}   (${used} assigned of ${total})`}
    </span>
  );
};
