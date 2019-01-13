
START-UP PROCEDURE
==================
- Install and configure xampp 
- sudo /opt/lampp/lampp start 
- clone the repo
- npm install && npm start


ROUTINES
=================
1. pull a particular branch

> git pull origin <branch>

2. Create a new branch named "feature_x" and switch to it using

> git checkout -b feature_x

3. push the branch to your remote repository

> git push origin <branch>

4. switch back to master

> git checkout master

5. and delete the branch again

> git branch -d feature_x


TODO TASKLIST
=================

- [x] Staff
- [ ] Customer
- [ ] Schedule


API ROUTES
================

1. api/staff
------------
- **List Staffs**
    - get /api/staff


- **Add Staff**
    - post /api/staff


- **Delete Staff**
    - delete /api/staff/{staffId}


- **Update Staff**
    - put /api/staff/{staffId}


Note
=====

for bycrypt, install:
Ubuntu > sudo apt-get install -y build-essential python
sudo apt install node-pre-gyp
Windows > npm install --global --production windows-build-tools
