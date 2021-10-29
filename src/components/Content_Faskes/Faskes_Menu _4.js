import './Faskes_Menu_1.css'
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
const Faskes_Konten_2=()=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
    { name: 'Radio', value: '4' },
    ];
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='right-container'>
                    <header>
                        <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Inventori Plasma</label>
                                <input id='pets-name' placeholder="ID Inventori Plasma" type='text'/>
                            </div>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Pendonor</label>
                                <input id='pets-name' placeholder="ID Pendonor" type='text'/>
                            </div>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID PMI</label>
                                <input id='pets-breed' placeholder="ID PMI" type='text'/>
                            </div>    
                        </div>
                        <div class='set'>
                            
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Golongan Darah </label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-female'>Female</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-male'>Male</label>
                                </div>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>Rhesus</label>
                                <input id='pets-birthday' placeholder='Usia' type='text'></input>
                            </div>
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>Tanggal Pendonor</label>
                                    <input id='pets-birthday' placeholder='DD/MM/YYYY' type='text'></input>
                            </div>
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>Tanggal Kadaluarsa</label>
                                    <input id='pets-birthday' placeholder='DD/MM/YYYY' type='text'></input>
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div class='set'>
                            <button id='back'>Back</button>
                            <button id='next'>Next</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    
    );
}
export default Faskes_Konten_2