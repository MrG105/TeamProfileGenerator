module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <header class ="container-fluid text-center text-white bg-danger p-2">
        <h1>Team Profile</h1>
    </header>
    <div class = "container">
        <div class = "row">
            <div class = "col-12 d-flex justify-content-center>
                ${assembleTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>`
}

const assembleTeam = team => {

    const addEngineer = engineer => {
        return `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()} - ${engineer.getRole()}</h5>
                <ul class = "list-group text-dark">
                    <li class = "list-group-item">ID Number: ${engineer.getId()}</li>
                    <li class = "list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class = "list-group-item">Github: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>`
    }

    const addManager = manager => {
        return `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()} - ${manager.getRole()}</h5>
                <ul class = "list-group text-dark">
                    <li class = "list-group-item">ID Number: ${manager.getId()}</li>
                    <li class = "list-group-item">Email: ${manager.getEmail()}</li>
                    <li class = "list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`
    }

    const addIntern = intern => {
        return `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()} - ${intern.getRole()}</h5>
                <ul class = "list-group text-dark">
                    <li class = "list-group-item">ID Number: ${intern.getId()}</li>
                    <li class = "list-group-item">Email: ${intern.getEmail()}</li>
                    <li class = "list-group-item">School Attending: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => addManager(manager))
        .join('')
    );

    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => addEngineer(engineer))
        .join('')
    );

    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => addIntern(intern))
        .join('')
    );

    return html.join('');
}