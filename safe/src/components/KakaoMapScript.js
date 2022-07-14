const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(35.1795543, 129.0756416),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

}