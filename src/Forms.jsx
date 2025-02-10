function Form() {
    return <form>
        {/* patients informations */}
        <label for="pFname">Firstname</label>
        <input type="text" id="pFname" ></input>
        <label for="pLname">Lastname</label>
        <input type="text" id="pLname" ></input>
        <label for="periodCov">Period Covered:</label>
        <label for="from">From</label>
        <input type="date" id="from"></input>
        <label for="to">To</label>
        <input type="date" id="to"></input>

        {/* Type of Request */}
        <input type="checkbox" id="statdata" name="statdata" value="statdata"></input>
        <label for="statData">Statistical Data</label>
        <input type="checkbox" id="reports" name="reports" value="reports"></input>
        <label for="reports">Reports/Docs. Photocopy</label>
        <input type="checkbox" id="hrr" name="hrr" value="hrr"></input>
        <label for="hrr">Health Records Retrieval</label>
        <input type="checkbox" id="rsc" name="rsc" value="rsc"></input>
        <label for="rsc">Research Stat. Consultation</label>
        <input type="checkbox" id="others" name="others" value="others"></input>
        <label for="others">Others</label>

        {/* Intended use */}
        <input type="radio" id="internal" name="intended_use" value="internal"></input>
        <label for="internal">Internal</label>
        <input type="radio" id="external" name="intended_use" value="external"></input>
        <label for="external">External</label>
    </form>
    
}

export default Form;