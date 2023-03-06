const API_BASE_URL = 'https://nf-api.onrender.com';

// End.points:
// Register: /api/v1/social/auth/register
// Login: /api/v1/social/auth/login
// Get All posts: /api/v1/social/auth/posts
//--------------------- Registrers User


/**
 * API call that registers the user
 * @param {*} url 
 * @param {*} userData 
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */
async function registerUser(url, userData) {
    try{
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error);
    }
}

const userToRegister = {
    "name": "trying_username",
    "email": "trying_username@stud.noroff.no",
    "password": "user1234",
}

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

// registerUser(registerUrl, userToRegister);

//----------------------------- Login user

async function loginUser(url, userData){
    try{
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken)
    } catch(error){
        console.log(error);
    }
};

const userToLogin = {
    "email": "trying_username@stud.noroff.no",
    "password": "user1234",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

loginUser(loginUrl, userToLogin);

// ------------------------ Request with token

async function getPost(url) {
    try{
        console.log(url);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);   

    } catch (error) {
        console.log(error);
    }
}
const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

// getPost(postsUrl);
