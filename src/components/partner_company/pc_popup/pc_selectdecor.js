import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

function PcSelectDecor() {
  return (
    <div className="w_r_p_holder">
    <div className="write-reivew-popup_holder">
        <div className="w-r-holder sd-holder ro_hd">
            <h2>Signage & Decorations </h2>
            <a href=""><i className="icon-close"></i></a> 
        </div>  
        <div className="w-r-form-holder">
            <form action="" method="POST">
                <div className="artis-holder">
                    <label for="">Please Select anyone</label>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="magician" name="artis name" value="Magician"/>
                        <label for="magician" className="mtc">Wedding Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Tattoo Artist" name="artis name" value="Tattoo Artist"/>
                        <label for="Tattoo Artist" className="mtc">Ballon Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Caricature Artist" name="artis name" value="Caricature Artist"/>
                        <label for="Caricature Artist" className="mtc">Full Place Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Makeup Artist" name="artis name" value="Makeup Artist"/>
                        <label for="Makeup Artist" className="mtc">Stage Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Puppeteers" name="artis name" value="Puppeteers"/>
                        <label for="Puppeteers" className="mtc">Flower Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Clown" name="artis name" value="Clown"/>
                        <label for="Clown" className="mtc">Theme Decoration</label>
                    </div>
                    <div className="artis_select_holder">                            
                        <input type="radio" id="Mascots" name="artis name" value="Mascots"/>
                        <label for="Mascots" className="mtc">Drapes Decoration</label>
                    </div>
                </div>
                <a href="" className="artise-add-holder sd-select"><i className="icon-plus"></i>Add New</a>
           </form>
        </div>    
    </div>  
</div>
  );
}

export default PcSelectDecor;
