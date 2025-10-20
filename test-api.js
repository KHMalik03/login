// Run this with: node test-api.js
require('dotenv').config();


const testAPI = async () => {
    const BASE_URL = process.env.BASE_URL ;

    console.log(' Starting API Tests...\n');

    // Test 1: Health check
    console.log(' Testing health endpoint...');
    try {
        const healthRes = await fetch(`${BASE_URL}/health`);
        const healthData = await healthRes.json();
        console.log(' Health check:', healthData);
    } catch (error) {
        console.log(' Health check failed:', error.message);
        console.log('Make sure your server is running on port 8000\n');
        return;
    }

    // Test 2: Register new user
    console.log('\n Testing user registration...');
    try {
        const registerRes = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'testuser@example.com',
                password: 'testpass123'
            })
        });
        const registerData = await registerRes.json();
        console.log(`Status: ${registerRes.status}`);
        console.log('Response:', registerData);
        
        if (registerRes.status === 201) {
            console.log(' Registration successful');
        } else if (registerRes.status === 409) {
            console.log(' User already exists (this is fine)');
        } else {
            console.log(' Registration failed');
        }
    } catch (error) {
        console.log(' Registration error:', error.message);
    }

    // Test 3: Login with correct credentials
    console.log('\n3️⃣ Testing login with correct password...');
    try {
        const loginRes = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'testuser@example.com',
                password: 'testpass123'
            })
        });
        const loginData = await loginRes.json();
        console.log(`Status: ${loginRes.status}`);
        console.log('Response:', loginData);
        
        if (loginRes.status === 200) {
            console.log(' Login successful');
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        console.log(' Login error:', error.message);
    }

    // Test 4: Login with wrong password
    console.log('\n Testing login with wrong password...');
    try {
        const wrongLoginRes = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'testuser@example.com',
                password: 'wrongpassword'
            })
        });
        const wrongLoginData = await wrongLoginRes.json();
        console.log(`Status: ${wrongLoginRes.status}`);
        console.log('Response:', wrongLoginData);
        
        if (wrongLoginRes.status === 401) {
            console.log(' Correctly rejected wrong password');
        } else {
            console.log(' Should have rejected wrong password');
        }
    } catch (error) {
        console.log(' Test error:', error.message);
    }

    // Test 5: Invalid email format
    console.log('\n Testing invalid email format...');
    try {
        const invalidRes = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'notanemail',
                password: 'testpass123'
            })
        });
        const invalidData = await invalidRes.json();
        console.log(`Status: ${invalidRes.status}`);
        console.log('Response:', invalidData);
        
        if (invalidRes.status === 422) {
            console.log(' Correctly rejected invalid email');
        } else {
            console.log(' Should have rejected invalid email');
        }
    } catch (error) {
        console.log('Test error:', error.message);
    }

    console.log('\n Tests completed!\n');
};

testAPI();