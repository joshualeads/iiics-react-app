function NestedDropDown({ nestedDropDownOptions }) {
  return (
    <li className="dropdown">
      <a href={nestedDropDownOptions.url}>
        <span>{nestedDropDownOptions.title}</span> {/* Drop Down */}
        <i className="bi bi-chevron-down dropdown-indicator"></i>
      </a>
      <ul>
        {nestedDropDownOptions.nest.map((nest) => {
          return nest.deepNest ? (
            <li className="dropdown" key={nest.title}>
              <a href={nest.url}>
                <span>{nest.title}</span>
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                {nest.deepNest.map((deepNestValue) => {
                  return (
                    <li key={deepNestValue.title}>
                      <a href={deepNestValue.url}>{deepNestValue.title}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
            <li key={nest.title}>
              <a href={nest.url}>{nest.title}</a> {/* Drop Down 1 */}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default NestedDropDown;
