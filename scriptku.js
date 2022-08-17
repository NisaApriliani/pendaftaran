let modal = document.getElementById('myModal');
let btn = document.getElementById("tombolku");



function modals() {
    // let mymodal = document.getElementsByClassName('modal-content')
    let mymodal = document.getElementById('modal-content')
    var no_pendaftaran = document.getElementById('no_pendaftaran').value;
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var no_telp = document.getElementById('no_telp').value;
    var agama = document.getElementById('agama').value;
    var jenis_kelamin = document.getElementById('jk').value;
    var status = document.getElementById('status').value;
    var kewarganegaraan = document.getElementById('kewarganegaraan').value;
    var asal_universitas = document.getElementById('asal_universitas').value;
    var tahun_lulus = document.getElementById('tahun_lulus').value;
    var bidang_pekerjaan = document.getElementById('bidang_pekerjaan').value;
    var berapa_lama_bekerja = document.getElementById('lama_kerja').value;

    // console.log(nama);
    mymodal.innerHTML = `<p> no Pendaftaran : `+no_pendaftaran+`</p>`
    +`<p> Email : `+email+`</p>`
    +`<p> Nama : `+nama+`</p>`
    +`<p> No TELP : `+no_telp+`</p>`
    +`<p> Agama : `+agama+`</p>`
    +`<p> Jenis Kelamin : `+jenis_kelamin+`</p>`
    +`<p> Status : `+status+`</p>`
    +`<p> Kewarganegaraan : `+kewarganegaraan+`</p>`
    +`<p> Asal Universitas : `+asal_universitas+`</p>`
    +`<p> Tahun Lulus : `+tahun_lulus+`</p>`
    +`<p> Bidang Pekerjaan : `+bidang_pekerjaan+`</p>`
    +`<p> Berapa Lama Bekerja : `+berapa_lama_bekerja+`</p>`
    +`
    <form action="formulir.html">
    <button value="submit">Selesai</button>
    </form>`;
    // for(let i=0;i < formValues.length;i++) {
    //     console.log(formValues[i].value)
    // }
    modal.style.display = "block";
}


window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}