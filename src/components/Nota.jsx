import plantanota from "../assets/images/plantanota.png";
function Nota({nota,width=120}) {
    const notas= Math.round((nota*10).toFixed(0));
    console.log(notas);
    return(
     <div
      style={{
        width: width,
        height: width*0.2,
        background: `
          linear-gradient(
            to right,
            #0c9924 0%,
            #0c9924 ${notas}%,
            #b3afaf ${notas}%,
            #b3afaf 100%
          )
        `,
        WebkitMask: `url(${plantanota}) center / contain no-repeat`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        display: "inline-block",
      }}
    />
    )
}
export default Nota;