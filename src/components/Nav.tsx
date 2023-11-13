import { Link } from "react-router-dom"
import { AiTwotoneSound } from "react-icons/ai"
import { GiSoundOff } from "react-icons/gi"
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs"

import '../styles/nav.css'

type propNavType = {
    sound?: boolean
    state?: boolean
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Nav({ sound, state, handleClick }: propNavType) {
    return (
        <div className="nav">
            <Link to="/" className="first">
                <span className="red">D</span>
                <span className="green"> E </span>
                <span className="blue">P</span>
            </Link>
            {
                sound || sound == false ? (
                    <>
                        {
                            sound ? (
                                <>
                                    {
                                        state ? (
                                            <i className="icon-nav" onClick={handleClick}>
                                                <AiTwotoneSound />
                                            </i>
                                        ) : (
                                            <i className="icon-nav" onClick={handleClick}>
                                                <GiSoundOff />
                                            </i>
                                        )
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        state ? (
                                            <i className="icon-nav" onClick={handleClick}>
                                                <BsFillLightbulbFill />
                                            </i>
                                        ) : (
                                            <i className="icon-nav" onClick={handleClick}>
                                                <BsFillLightbulbOffFill />
                                            </i>
                                        )
                                    }
                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        <Link to="/sound">Sonido</Link>
                        <Link to="/light">Luz</Link>
                    </>
                )
            }
            {
                (sound || sound == false) ? (
                    <>
                        <Link to={`${sound ? "/light" : "/sound"}`}>
                            {
                                sound ? <>Luz</> : <>Sonido</> 
                            }
                        </Link>
                    </>
                ) : <></>
            }
        </div>
    )
}

export default Nav
