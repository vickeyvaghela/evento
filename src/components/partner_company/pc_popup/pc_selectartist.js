import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

function PcSelectArtist() {
  return (
    <div className="w_r_p_holder">
    <div className="write-reivew-popup_holder">
        <div className="w-r-holder sd-holder ro_hd">
            <h2>Artist</h2>
            <a  ><i className="icon-close"></i></a> 
        </div>  
        <div className="w-r-form-holder">
           <form action="" method="POST">
                <div className="artis-holder">
                    <label for="">Please Select anyone Artist</label>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="magician" name="artis name" value="Magician"/>
                        <label for="magician" className="mtc">Magician</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Tattoo Artist" name="artis name" value="Tattoo Artist"/>
                        <label for="Tattoo Artist" className="mtc">Tattoo Artist</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Caricature Artist" name="artis name" value="Caricature Artist"/>
                        <label for="Caricature Artist" className="mtc">Caricature Artist</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Makeup Artist" name="artis name" value="Makeup Artist"/>
                        <label for="Makeup Artist" className="mtc">Makeup Artist</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Puppeteers" name="artis name" value="Puppeteers"/>
                        <label for="Puppeteers" className="mtc">Puppeteers</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Clown" name="artis name" value="Clown"/>
                        <label for="Clown" className="mtc">Clown</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Mascots" name="artis name" value="Mascots"/>
                        <label for="Mascots" className="mtc">Mascots</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Theme Planner" name="artis name" value="Theme Planner"/>
                        <label for="Theme Planner" className="mtc">Theme Planner</label>
                    </div>
                </div>
                <div className="ps-1_1">
                    <label for="">Other</label>
                    <input type="text" id="" name="" value=""/>
                </div>
                <a   className="artise-add-holder"><i className="icon-plus"></i>Add New</a>
           </form>
        </div>    
    </div>  
</div>
  );
}

export default PcSelectArtist;
