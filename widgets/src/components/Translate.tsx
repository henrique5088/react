import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

interface Props {

}

const options = [
    {
        label: 'Portuguese',
        value: 'pt'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
];


const Translate = (props: Props) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown
                label='Select a language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
