//Camera and Scene
const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 200;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
    cameraWidth / -2.5, // left
    cameraWidth / 2.5, // right
    cameraHeight / 2.5, // top
    cameraHeight / -2.5, // bottom
    0, // near plane
    1000 // far plane
  );
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);
  
  const renderer = new THREE.WebGLRenderer();
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xEEB4B4, 0.6);
  directionalLight.position.set(100, 700, 500);
  scene.add(directionalLight); 
  
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  document.body.appendChild( renderer.domElement );

//Code Starts here

//Room Code
//Walls 
function generateBaseWall(){

    const wall = new THREE.Mesh(
        new THREE.BoxGeometry(100, 20, 4),
        new THREE.MeshToonMaterial({color: 0xfff4e6}) //wall color
    );
    return wall;

}
//to create room
function generateRoom(){

        const room = new THREE.Group();

        const leftWall = generateBaseWall();
        leftWall.rotation.y = 17.28;
        leftWall.position.set(-47.9, 3.6);
        room.add(leftWall);

        const rightWall = generateBaseWall();
        rightWall.position.set(0, 3.6, -50)
        room.add(rightWall);

        const floor = new THREE.Mesh( 
        new THREE.PlaneGeometry( 100, 100, 3, 3 ), 
        new THREE.MeshToonMaterial( { color: 0xbe9b7b} ), 

        );
        floor.material.side = THREE.DoubleSide;
        floor.rotation.x = 11;
        floor.position.y= -6.5;
        room.add(floor);



// ^^ INSERT CODE UP HERE FOR ROOM  ^^        
//last ng generate room code
return room;

}
const room = generateRoom();
scene.add(room); 


//MAT ONLY

function generateFloorMat(){
    
    const mat = new THREE.Mesh( 
        new THREE.BoxGeometry (5, 10, 0.5),
        new THREE.MeshToonMaterial({color : 0x816b6b}));
        mat.material.side = THREE.DoubleSide;
        mat.rotation.x = 11;
        mat.position.set(-32, 1.5, -30);


    

return mat;  
}
const mat = generateFloorMat();
scene.add(mat);

// TableLegs for easy stuff
function generateTableLegs(){
    const tableLeg = new THREE.Mesh(
        new THREE.BoxGeometry(15, 7, 1),
        new THREE.MeshToonMaterial({color: 0x7c7c7c})
        //7c7c7c
    );
    return tableLeg;
}




// ALL DECOR + DOOR / WINDOW

function generateDecor(){

    const decor = new THREE.Group();


    const door = new THREE.Mesh(
        new THREE.BoxGeometry(1, 20, 10),
        new THREE.MeshToonMaterial({color : 0xffffff}));
        door.material.side = THREE.DoubleSide;
        door.position.set(-45, 1.5, -39);

        decor.add(door);
    
    const doorf = new THREE.Mesh(
        new THREE.BoxGeometry(1, 21, 12),
        new THREE.MeshToonMaterial({color : 0xc0d6e4}));
        doorf.material.side = THREE.DoubleSide;
        doorf.position.set(-45, 1.5, -39);

        decor.add(doorf);


    const window = new THREE.Mesh(
        new THREE.BoxGeometry(1, 12, 15),
        new THREE.MeshPhongMaterial({color : 0xc0d6e4}));
        window.material.side = THREE.DoubleSide;
        window.position.set(-45, 7, -18);

        decor.add(window);

    const curtain = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 15, 12),
        new THREE.MeshToonMaterial({color : 0x854442}));
        curtain.material.side = THREE.DoubleSide;
        curtain.position.set(-44, 6, -18);

        decor.add(curtain);
    
//TABLE

    const tableTop = new THREE.Mesh(
        new THREE.BoxGeometry(15,1,40),
        new THREE.MeshToonMaterial({color: 0x4b3832}));
        tableTop.material.side = THREE.DoubleSide;
        tableTop.position.set(-40, 0, 15);

        decor.add(tableTop);

    const tableSideLeft = generateTableLegs();
    decor.add(tableSideLeft);
    tableSideLeft.position.set(-40, -3, 35);

    const tableSideRight = generateTableLegs();
    decor.add(tableSideRight);
    tableSideRight.position.set(-40, -3, -5);
    
//PC and ETC

    const speakerBase = new THREE.Mesh(
        new THREE.BoxGeometry(7,7,5),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        speakerBase.material.side = THREE.DoubleSide;
        speakerBase.position.set(-40, 3, 30)

        decor.add(speakerBase);

    const speakerRing = new THREE.Mesh(
        new THREE.RingGeometry(1,1.5,55),
        new THREE.MeshToonMaterial({color: 0xffffff}));
        speakerRing.material.side = THREE.DoubleSide;
        speakerRing.rotation.x = 11
        speakerRing.rotation.y = 11
        speakerRing.position.set(-36, 5, 30)

        decor.add(speakerRing);

    const laptopBase = new THREE.Mesh(
        new THREE.BoxGeometry(5, 1, 7),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        laptopBase.material.side = THREE.DoubleSide;
        laptopBase.position.set (-41, 1, 15)
        
        decor.add(laptopBase);

    const laptopScreen = new THREE.Mesh(
        new THREE.BoxGeometry(1,10,7),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        laptopScreen.material.side = THREE.DoubleSide;
        laptopScreen.position.set (-43, 1,15)

        decor.add(laptopScreen);
    
            
// Chair
    const chairBase = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1, 3),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        chairBase.material.side = THREE.DoubleSide;
        chairBase.position.set(-20, 0, 12)

        decor.add(chairBase);

    const chairSeat = new THREE.Mesh(
        new THREE.BoxGeometry(6, 1, 6),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        chairSeat.material.side = THREE.DoubleSide;
        chairSeat.position.set(-20, 5, 12)
    
        decor.add(chairSeat);

    const chairBack = new THREE.Mesh(
        new THREE.BoxGeometry(1, 7, 6),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        chairBack.material.side = THREE.DoubleSide;
        //chairBack.rotation.x = 6.5
        chairBack.position.set(-17, 8, 12)
        
        decor.add(chairBack);

    const chairRod = new THREE.Mesh(
        new THREE.BoxGeometry(1, 5, 1),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        chairRod.material.side = THREE.DoubleSide;
        chairRod.position.set(-20, 1, 12)

        decor.add(chairRod);

//TV TABLE 

    const tvBase = new THREE.Mesh(
        new THREE.BoxGeometry(24, 5, 10),
        new THREE.MeshToonMaterial({color: 0x3c2f2f}));
        tvBase.material.side = THREE.DoubleSide;
        tvBase.position.set(20, 1, -35)
    
        decor.add(tvBase);

    const tvWall = new THREE.Mesh(
        new THREE.BoxGeometry(24, 12, 1),
        new THREE.MeshToonMaterial({color: 0x3f3f3f}));
        tvWall.material.side = THREE.DoubleSide;
        tvWall.position.set(20, 12,-40)

        decor.add(tvWall);



    const tvBar = new THREE.Mesh(
        new THREE.BoxGeometry(7, 1, 1),
        new THREE.MeshToonMaterial({color: 0xfff4e6}));
        tvBar.material.side = THREE.DoubleSide;
        tvBar.position.set(20, 1, -30)
    
        decor.add(tvBar);
//TV Boxes or Books
function generateBook(){
    const tvBook = new THREE.Mesh(
        new THREE.BoxGeometry(4, 1, 5),
        new THREE.MeshToonMaterial({color: 0x783f04}));
        tvBook.material.side = THREE.DoubleSide;
          return tvBook; 
    }
    const book1 = generateBook();
    book1.material.color.setHex(0x065535);
    book1.position.set(15, 5, -35);
    decor.add(book1);
    //tvBook.position.set(20, 5, -35)
       //decor.add(tvBook);

    const book2 = generateBook();
    book2.material.color.setHex(0x20b2aa);
    book2.position.set(25, 5, -33);
    book2.rotation.y = 6
    decor.add(book2);


    const book3 = generateBook();
    book3.material.color.setHex(0xdaa520);
    book3.position.set(-40, 1, 4);
    book3.rotation.y = 5
    decor.add(book3);
//BED
    const bed = new THREE.Mesh(
        new THREE.BoxGeometry(40,8,55),
        new THREE.MeshToonMaterial({color: 0xc4c4c4}));
        bed.material.side = THREE.DoubleSide;
        bed.position.set(20.5, 1, 23.5);

        decor.add(bed);        
    

        const bedframe = new THREE.Mesh(
            new THREE.BoxGeometry(40,12,1),
            new THREE.MeshToonMaterial({color: 0x3c2f2f}));
            bedframe.material.side = THREE.DoubleSide;
            bedframe.position.set(20.5, 1, 51);

            decor.add(bedframe);   

        const bedsheet = new THREE.Mesh(
            new THREE.BoxGeometry(40,12,40),
            new THREE.MeshToonMaterial({color: 0xd9ead3}));
            bedsheet.material.side = THREE.DoubleSide;
            bedsheet.position.set(21, 1, 20);

            decor.add(bedsheet);   

        
        const pillow1 = new THREE.Mesh(
            new THREE.BoxGeometry(8,4,6),
            new THREE.MeshToonMaterial({color: 0x999999}));
            pillow1.material.side = THREE.DoubleSide;
            pillow1.position.set(10, 5, 45);

            decor.add(pillow1);   

        const pillow2 = new THREE.Mesh(
            new THREE.BoxGeometry(8,4,6),
            new THREE.MeshToonMaterial({color: 0x999999}));
            pillow2.material.side = THREE.DoubleSide;
            pillow2.position.set(28, 5, 45);

            decor.add(pillow2);   


// CAPYABRA
function generateCapyLegs(){
    const capyLeg = new THREE.Mesh(
        new THREE.BoxGeometry(1, 5, 1),
        new THREE.MeshToonMaterial({color: 0x8e6242})
        
    );
    return capyLeg;
}

    const capyBody = new THREE.Mesh(
        new THREE.BoxGeometry(5,4,10),
        new THREE.MeshToonMaterial({color: 0x8e6242}));
        capyBody.material.side = THREE.DoubleSide;
        capyBody.position.set(-5, 3, -30);


        decor.add(capyBody);

    const capyLeg1 = generateCapyLegs();
    capyLeg1.position.set(-5, 0, -30);
    decor.add(capyLeg1);
    
    const capyLeg2 = generateCapyLegs();
    capyLeg2.position.set(-5, 0, -35);
    decor.add(capyLeg2);

    const capyHead = new THREE.Mesh(
        new THREE.BoxGeometry(5,4,5),
        new THREE.MeshToonMaterial({color: 0x8e6242}));
        capyHead.position.set(-5, 5, -25);

        decor.add(capyHead);
            
// PLANTS
    const plantPot = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 5),
        new THREE.MeshToonMaterial({color: 0x4b3832}));
        plantPot.material.side = THREE.DoubleSide;
        plantPot.position.set(40, 1, -35)

        decor.add(plantPot);

    const plantLeaves = new THREE.Mesh(
        new THREE.DodecahedronGeometry(5, 0),
        new THREE.MeshToonMaterial({color: 0x065535}));
        plantLeaves.material.side = THREE.DoubleSide;
        plantLeaves.position.set(40, 5, -35)

        decor.add(plantLeaves);


//GROUP DECOR CODE ANY PROPS ABOVE PLS 
return decor;
}
const decor = generateDecor();
scene.add(decor);



//NO CODE AFTER THIS 
//Renderer must be at the bottom
renderer.render(scene, camera);