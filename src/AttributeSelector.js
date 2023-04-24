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
      <h3>Select Attributes:</h3>
      <ul>
        {attributes.map((attribute) => (
          <li key={attribute} onClick={() => handleAttributeClick(attribute)}>
            {attribute}
          </li>
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