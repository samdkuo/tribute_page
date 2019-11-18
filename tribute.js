const facts = 'Known For: Holocaust survivor who became a renowned Christian leader, known for her teachings on forgiveness\
\nOccupation: Watchmaker and writer\
\nBorn: April 15, 1892 in Haarlem, the Netherlands\
\nDied: April 15, 1983 in Santa Ana, California\
\nPublished Works: The Hiding Place, In My Father\'s Place, Tramp for the Lord\
\nNotable Quote: "Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart."'

function string_to_array(){
    return facts.split();
}

function bold_heading(fact){
    fact_array = fact.split(":")
    heading =fact_array[0]
    body = fact_array[1]
    return heading + ": " + body
}

function input_facts(){
    const facts_array = facts.split("\n");
    let facts_list = document.getElementById("tribute-info");

    for (let i = 0; i < facts_array.length; i++){
        const fact = bold_heading(facts_array[i]);
        const fact_element = document.createElement("li");
        const text = document.createTextNode(fact);

        fact_element.appendChild(text);
        facts_list.appendChild(fact_element);
    }
}

input_facts();