
import "./addprojects.css"

const Addprojects = () => {
    return (
        <div className="addprojects-container">
            <h1>Add Projects</h1>
            <form>
                <div>
                    <label>
                        Project Name
                    </label>
                    <input type="text">
                    </input>
                </div>
                <div>
                    <label>
                        Project Link
                    </label>
                    <input type="text">
                    </input>
                </div>
                <div>
                    <label>
                        Description
                    </label>
                    <input type="text">
                    </input>
                </div>
                <button>
                    Add
                </button>
            </form>
        </div>
    )
}

export default Addprojects