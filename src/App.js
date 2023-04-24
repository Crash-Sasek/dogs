import AttributeSelector from './AttributeSelector';
import SearchResults from './SearchResults';
import { useState } from 'react';


function App() {

  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [searchTerms, setSearchTerms] = useState([])

  return (
    <div className="App">
      <AttributeSelector selectedAttributes={selectedAttributes}  setSelectedAttributes={setSelectedAttributes} setSearchTerms={setSearchTerms} searchTerms={searchTerms}/>
      <SearchResults selectedAttributes={selectedAttributes} searchTerms={searchTerms}/>
    </div>
  );
}

export default App;