export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
    	console.log('saving auth');
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
    	    	console.log('removing auth');

        localStorage.removeItem('authToken');
    } catch (e) {}
};