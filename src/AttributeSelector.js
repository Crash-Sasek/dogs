import React from "react";

function AttributeSelector({selectedAttributes, searchTerms, setSelectedAttributes, setSearchTerms}) {

  const handleAttributeClick = (attribute) => {
      setSelectedAttributes([...selectedAttributes, attribute]);
      setSearchTerms([...searchTerms, ""]);
  };

  const handleSearchTermOnChange = (e, index) => {
      setSearchTerms([...searchTerms.slice(0, index), e.target.value, ...searchTerms.slice(index + 1, searchTerms.length)])
  };

  const attributes = [
    "breed",
    "country",
    "furcolor",
    "height",
    "eyecolor",
    "longevity",
    "character",
    "health",
  ];

  return (
    <div>
      <h2>Select the Attributes of Your Perfect Doggo:</h2>
      <ul>
        {attributes.map((attribute) => (
          <div className="btn btn-primary">
          <li key={attribute} onClick={() => handleAttributeClick(attribute)}>
            {attribute}
          </li>
          </div>
        ))}
      </ul>
      {selectedAttributes.length > 0 && (
        <div>
        <div><span>Input Attributes: </span></div>
        {selectedAttributes.map((attribute, index) => {
          return (
            <div>
              {attribute}
              <input type="text" placeholder="Attribute..." value={searchTerms[index]} onChange={ (e) => handleSearchTermOnChange(e, index) } />
            </div>
          )
        })}
        </div>
      )}
    </div>
  );
}

export default AttributeSelector;