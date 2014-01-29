(function (THREE, window) {
    var camera, scene, renderer;
    var geometry, material, mesh;

    var init = function () {
        scene = new THREE.Scene();

//        geometry = new THREE.IcosahedronGeometry(200, 1);
        geometry = new THREE.CylinderGeometry(100, 100, 100, 8, 1, false);
        material = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
            wireframeLineWidth: 2
        });
        mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(75,
            window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 500;

    };

    var animate = function () {
        requestAnimationFrame(animate);
//        mesh.rotation.x = Date.now() * 0.00005;
        mesh.rotation.y = Date.now() * 0.0001;
        renderer.render(scene, camera)
    };

    init();
    animate();


})(THREE, window);