import React, {useState} from "react"
//style
import "./Modal.css"
import {useDispatch} from "react-redux";
import {createProduct} from "../../store/actions";

const AddItem = ({handleModal, show, index}) => {
    const [nameField, setNameField] = useState("")
    const [countField, setCountField] = useState("")
    const [widthField, setWidthField] = useState("")
    const [heightField, setHeightField] = useState("")
    const [weightField, setWeightField] = useState("")
    const [errorArr, setErrorArr] = useState([])
    const dispatch = useDispatch();
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const SubmitHandler = (e) => {
        e.preventDefault()
        const errors = []
        setErrorArr([])
        if (nameField && countField && widthField && heightField && weightField) {
            const obj = {
                "id": new Date().getTime(),
                "name": nameField,
                "count": countField,
                "size": {
                    "width": widthField,
                    "height": heightField,
                },
                "weight": weightField,
                "comments":[]
            }
            dispatch(createProduct(obj));
            handleModal()
            setNameField("")
            setCountField("")
            setWidthField("")
            setHeightField("")
            setWeightField("")
            return;
        }
        if (!nameField) {
            errors.push('Name required.')
        }
        if (!countField) {
            errors.push('Count required.')
        }
        if (!widthField) {
            errors.push('Width required.')
        }
        if (!heightField) {
            errors.push('Height required.')
        }
        if (!weightField) {
            errors.push('Weight required.')
        }
        setErrorArr(errors)
    }
    return (<div className={showHideClassName}>
        <section className="modal-main">
            <h2>Create new product</h2>
            <form onSubmit={(e) => SubmitHandler(e)} className="form-addMew">
                <label>Name of product</label>
                <input type="text"
                       placeholder="Sneakers"
                       value={nameField}
                       onChange={e => setNameField(e.target.value)}/>
                <label>Count</label>
                <input type="number"
                       placeholder="15"
                       value={countField}
                       onChange={e => setCountField(e.target.value)}/>
                <label>Size: width</label>
                <input type="number"
                       placeholder="200"
                       value={widthField}
                       onChange={e => setWidthField(e.target.value)}/>
                <label>Size: height</label>
                <input type="number"
                       placeholder="200"
                       value={heightField}
                       onChange={e => setHeightField(e.target.value)}/>
                <label>Weight</label>
                <input type="number"
                       placeholder="350g"
                       value={weightField}
                       onChange={e => setWeightField(e.target.value)}/>
                <div> {errorArr.length ? <div>
                    <b>Please correct the following error(s):</b>
                    <ul>
                        {errorArr.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div> : null}

                </div>
                <div className="btn-group">
                    <button type="button" onClick={handleModal}>Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
        </section>
    </div>)
}

export default AddItem
