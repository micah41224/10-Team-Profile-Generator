const generateTeam = team => {

        const generateManager = (manager) => {
        return `
    <div class="card employee-card">
    <div class="card-header">

        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.id}</hs>
    </div>
    <div class="card-body">
        <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    
        </ul>
        
    </div>
</div>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
    <div class="card employee-card">
    <div class="card-header">

        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.id}</hs>
    </div>
    <div class="card-body">
        <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    
        </ul>
        
    </div>
</div>
        `;
    };

    const htmlArr = []

    // const htmlArr = [generateManager(team[0]), generateEngineer(team[1]), generateEngineer(team[2]),];

    htmlArr
    .push(team.filter(employee => employee.role === "manager"))
    .map((manager) => generateManager(manager));

    return htmlArr.join("");
};


module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

