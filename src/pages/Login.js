function Login(){
    return(
        <>
        <header>


        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label for ="username"></label>
                    <input id="username" type="text" name="username" placeholder="Username" />
                </div>
                <br/>
                <div>
                    <label for ="password">Password: </label>
                    <input id="password" tyoe="password" placeholder="password" />
                </div>
                <br/>
                <button type="submit" >submit</button>
            </form>
        </main>
        </>
    );
};
export default Login;