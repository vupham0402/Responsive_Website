import { EyeLogo, Hero } from '../../assets/assets';

export default function HeroPage() {
    return (
        <header className = "header bg-blue" id="eyeprogpo">
        <div className = "header-inner text-white text-center">
            <div className = "container grid">
                <div className = "header-inner-left">
                    <h1>Ophthalmology<br />Focused GPO</h1>
                    <p className = "text text-md">At EyeProGPO, we help healthcare providers
                    and ASCs realize cost savings and workflow efficiencies by utilizing aggregated membership purchasing volume to negotiate discounts with manufacturers, 
                    distributors, and vendors. EyeProGPO members typically save an average
                    of 12-20% on supply costs, <span style={{fontWeight: 'bold'}}>for free</span>.</p>
                    <div className = "btn-group">
                        <a href = "/why-choose-us" className = "btn btn-white">Learn More</a>
                        <a href = "https://eyeprogpo.wildapricot.org/Sys/Login" target='_blank' className = "btn btn-light-blue">Member Sign In</a>
                    </div>
                </div>
                <div className = "header-inner-right">
                    <img src = {EyeLogo} />
                </div>
            </div>
        </div>
        </header>
    );
}