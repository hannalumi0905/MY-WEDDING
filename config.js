/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "오한나",
    nameEn: "OH HANNA",
    father: "오창열",
    mother: "박희정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조아름",
    nameEn: "JO AREUM",
    father: "조광익",
    mother: "김경수",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-05",
    time: "11:00",
    venue: "더테라스 웨딩 & 파티",
    hall: "11층",
    address: "경기 고양시 일산동구 강석로 9",
    tel: "0507-1432-1017                            \n주차안내: 웨딩홀 내 270대 주차 가능 3~9층 \n하객 2시간 무료 주차",
    mapLinks: {
      kakao: "https://place.map.kakao.com/17388389",
      naver: "https://naver.me/Ghbg5Nma"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "조금씩 바람이 선선해지는 계절,\n저희도 함께할 날들을 준비하게 되었습니다.\n\n갑작스러운 연락이 부담이 되실까 망설였지만,\n감사한 분들께는 꼭 전하고 싶은 마음에\n조심스럽게 소식 남겨봅니다.\n\n멀리서라도 따뜻하게 축하해주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "하나님께서 예비하신 만남 속에서\n서로를 발견한 두 사람이 하나가 되어\n부부가 되기로 약속했습니다.\n\n귀한 걸음으로 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "오한나", bank: "지역농협", number: "352-0557-492613" },
      { role: "아버지", name: "오창열", bank: "농협", number: "217046-56-042354" },
      { role: "어머니", name: "박희정", bank: "농협", number: "217041-52-035733" }
    ],
    bride: [
      { role: "신부", name: "조아름", bank: "국민", number: "458301-01-428687" },
      { role: "아버지", name: "조광익", bank: "국민", number: "99260623259" },
      { role: "어머니", name: "김경수", bank: "카카오뱅크", number: "3333-19-6427260" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "오한나 ♥ 조아름 결혼합니다",
    description: "2026년 9월 5일, 소중한 분들을 초대합니다."
  }
};
