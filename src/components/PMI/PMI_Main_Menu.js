import './PMI_Main_Menu.css'
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import reactDom from 'react-dom';
import react,{useState} from 'react';
import Right_PMI_1 from '../Content_PMI/PMI_Menu_1';
import Right_PMI_2 from '../Content_PMI/PMI_Menu_2';
import Right_PMI_3 from '../Content_PMI/PMI_Menu_3';
import Right_PMI_4 from '../Content_PMI/PMI_Menu_4';
const PMI_Menu_1=(props)=>{
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
   
    const PMI1=()=>{
        return(
            <div class='right-container'>
                    <header>
                        <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID Pendonor</label>
                                <input id='pets-name' placeholder="ID Pendonor" type='text'/>
                            </div>
                            <div class='pets-name'>
                                <label for='pets-name'>Nama</label>
                                <input id='pets-name' placeholder="Nama" type='text'/>
                            </div>    
                        </div>
                        <div class='set'>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID Pegawai PMI</label>
                                <input id='pets-breed' placeholder="ID Pegawai RS" type='text'/>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>No. Handphone</label>
                                <input id='pets-birthday' placeholder='+62' type='text'></input>
                            </div>
                        </div>
                        <div class='set'>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Jenis Kelamin</label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-female'>Female</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-male'>Male</label>
                                </div>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>Tanggal Pendonor</label>
                                <input id='pets-birthday' placeholder='DD/MM/YYYY' type='text'></input>
                            </div>
                            
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Alamat</label>
                            <div class='radio-container'>
                                <input  id='pet-weight-0-25' name='pet-weight' type='text'  placeholder='Alamat'/>
                                
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div class='set'>
                            <button id='back'>Back</button>
                            <button id='next'>Next</button>
                        </div>
                    </footer>
                </div>);
    }
    const PMI2=()=>{
        return(
            <div className='right-container'>
                <header>
                <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
                <div class='set'>
                    <div class='pets-name'>
                        <label for='pets-name'>ID Pegawai PMI</label>
                        <input id='pets-name' placeholder="ID Pegawai PMI" type='text'/>
                    </div>
                    <div class='pets-name'>
                        <label for='pets-name'>Nama</label>
                        <input id='pets-name' placeholder="Nama" type='text'/>
                    </div>    
                </div>
                <div class='set'>
                    <div class='pets-breed'>
                        <label for='pets-breed'>ID PMI</label>
                        <input id='pets-breed' placeholder="ID PMI" type='text'/>
                    </div>
                    <div class='pets-gender'>
                        <label for='pet-gender-female'>Jenis Kelamin</label>
                        <div class='radio-container'>
                            <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                            <label for='pet-gender-female'>Female</label>
                            <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                            <label for='pet-gender-male'>Male</label>
                        </div>
                    </div>
                    <div class='pets-birthday'>
                        <label for='pets-birthday'>Usia</label>
                        <input id='pets-birthday' placeholder='Usia' type='text'></input>
                    </div>
                </div>
                <div class='set'>
                    <div class='pets-birthday'>
                            <label for='pets-birthday'>No. Handphone</label>
                            <input id='pets-birthday' placeholder='+62' type='text'></input>
                    </div>
                    <div class='pets-birthday'>
                        <label for='pets-birthday'>Username</label>
                        <input id='pets-birthday' placeholder='Username' type='text'></input>
                    </div>
                    <div class='pets-birthday'>
                        <label for='pets-birthday'>Password</label>
                        <input id='pets-birthday' placeholder='Password' type='text'></input>
                    </div>
                </div>
                <div class='pets-weight'>
                    <label for='pet-weight-0-25'>Alamat</label>
                    <div class='radio-container'>
                        <input  id='pet-weight-0-25' name='pet-weight' type='text'  placeholder='Alamat'/>
                        
                    </div>
                </div>
            </header>
            <footer>
                <div class='set'>
                    <button id='back'>Back</button>
                    <button id='next'>Next</button>
                </div>
            </footer>
    </div>);
    }
    const PMI3=()=>{
        return(
            <div class='right-container'>
                    <header>
                        <h1>Yay, puppies! Ensure your pup gets the best care!</h1>
                        <div class='set'>
                            <div class='pets-name'>
                                <label for='pets-name'>ID PMI</label>
                                <input id='pets-name' placeholder="ID PMI" type='text'/>
                            </div>
                            <div class='pets-name'>
                                <label for='pets-name'>Nama PMI</label>
                                <input id='pets-name' placeholder="Nama PMI" type='text'/>
                            </div>    
                        </div>
                        <div class='set'>
                            <div class='pets-breed'>
                                <label for='pets-breed'>ID PMI</label>
                                <input id='pets-breed' placeholder="ID PMI" type='text'/>
                            </div>
                            <div class='pets-gender'>
                                <label for='pet-gender-female'>Jenis Kelamin</label>
                                <div class='radio-container'>
                                    <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                                    <label for='pet-gender-female'>Female</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                                    <label for='pet-gender-male'>Male</label>
                                </div>
                            </div>
                            <div class='pets-birthday'>
                                <label for='pets-birthday'>Usia</label>
                                <input id='pets-birthday' placeholder='Usia' type='text'></input>
                            </div>
                            <div class='pets-birthday'>
                                    <label for='pets-birthday'>No. Telephone</label>
                                    <input id='pets-birthday' placeholder='(0341) XXXXXX' type='text'></input>
                            </div>
                        </div>
                        <div class='pets-weight'>
                            <label for='pet-weight-0-25'>Alamat</label>
                            <div class='radio-container'>
                                <input  id='pet-weight-0-25' name='pet-weight' type='text'  placeholder='Alamat'/>
                                
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div class='set'>
                            <button id='back'>Back</button>
                            <button id='next'>Next</button>
                        </div>
                    </footer>
                </div>);
    }
    const PMI4=()=>{
        return(
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
                </div>);
    }
    const [name,setName]=useState("1")
    const radios = [
      { name: 'Pendonor', value: '1'  },
      { name: 'Pegawai PMI', value: '2' },
      { name: 'PMI', value: '3' },
      { name: 'Inventori Plasma', value: '4' },
    ];
    
    return(
        <div className="containutama" >
            <div class='signup-container'>
                <div class='left-container'>
                    <h1 className="light">HI USER!! </h1>
                    <div>
                        <br/>
                        <br/>
                        <div className="circle"> </div>
                        <br/>
                        <br/>
                    </div>
                    
                    <div className=" d-grid gap-2">
                        <ButtonGroup vertical>
                            {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value) & setName(e.currentTarget.value)}
                                
                                className=""
                                size="lg"
                            >
                                {radio.name}
                            </ToggleButton>))}
                        </ButtonGroup>
                        <br/>
                        <br/>
                    </div>
                    <div class='puppy'>
                        <image src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png'/>
                        
                    </div>
                </div>
                <div>
                    {name==="1" && <Right_PMI_1/>}
                    {name==="2" && <PMI2/>}
                    {name==="3" && <PMI3/>}
                    {name==="4" && <PMI4/>}
                </div>
            </div>
        </div>
    
    );
}
export default PMI_Menu_1