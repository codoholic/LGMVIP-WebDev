
import React, { useState } from "react";
const Home = () => {
    const [fetched, setfetched] = useState(false);
    const [clicked, setclicked] = useState(false);
    const [users, setUser] = useState([]);
    const onclick = async () => {
         setclicked(true);
        const res = await fetch("https://reqres.in/api/users?page=1");
        const jsonres = await res.json();
        setUser(jsonres.data);

        setInterval(() => {
            setfetched(true);
          }, 3000);
    };
    return (
        <div className="Home">
            <div className="nav">
                <nav>
                    <div>
                        <h2>Kulfi Car Club</h2>
                    </div>
                    <div>
                        <button onClick={onclick}>Get Users</button>
                    </div>
                </nav>
            </div>
            {clicked ?(
            fetched ? (
            <div className="usrcard">
                {users.map(({ id, first_name, last_name, avatar, email }) => {
                    return (
                        <div className="card">
                            <div className="pic">
                                <img src={avatar}></img>
                            </div>

                            <div className="details">
                                <h3>
                                    {first_name} {last_name}
                                </h3>
                                <p>{email}</p>
                            </div>
                            <div className="social">
                                <h3>follow me on</h3>
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                            </div>
                        </div>
                    );
                })}

            </div>
            ) : (
                
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
            ) : (
                <> </>
            )}
        </div>
    );



};

export default Home;
