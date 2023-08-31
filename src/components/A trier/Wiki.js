import { useState, useEffect } from "react";
import '../styles/Wiki.css';

export default function Wiki()
{
    const [wiki, setWiki] = useState();
    const [parsedWiki, setParsedWiki] = useState();
    
    useEffect(() =>
    {
        fetch("https://fr.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&titles=Montcuq&formatversion=2&rvprop=content&rvslots=*&origin=*")
        .then(response => response.json())
        .then(data => setWiki(data));
    }, [])

    useEffect(() =>
    {
        if(wiki)
        {
            const parser = new DOMParser();
            setParsedWiki(parser.parseFromString(wiki.query.pages[0].extract, 'text/html'));
        }
    }, [wiki])

    return (
        <>
        { parsedWiki && 
            <div className="wiki-container">
                <div className="wiki" dangerouslySetInnerHTML={{__html: parsedWiki.body.innerHTML}}>
                    
                </div>
            </div> 
        }
        </>
    )
}