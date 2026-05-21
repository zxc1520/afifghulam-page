---
title: "Project Rempasi"
slug: "rempasi"
desc: "A brief description of the Rempasi project."
date: "2023-10-05"
image: "/assets/rempasi/ReMPASI.png"
tags: ["backend", "devops", "cloud"]
---
# <h2> 🎯 Tentang Proyek </h2>

An App that lets parents take pictures of their home food ingredients for healthy complementary meal suggestions based on their baby's nutritional requirements and is also expected to have the potential to reduce infant malnutrition.

<br/>

# 🛠️ Teknologi yang Digunakan

Berikut adalah beberapa teknologi utama yang kami manfaatkan dalam proyek ini:

-   📱 **Mobile:** Dibangun menggunakan [Astro](https://astro.build/) untuk performa website yang sangat cepat dan optimisasi SEO yang lebih baik.
-   ⚙️ **Backend:** Menggunakan teknologi Flask untuk serving model dari API yang telah dibuat.
-   ☁️ **Deployment:** Menggunakan third party cloud dengan Google Cloud Platform.

<br />

# ☁️ Arsitektur Cloud di Google Cloud Platform (GCP)

<img src="/public/assets/rempasi/rempasi-cloudarch.png" alt="cloud_architecture" style="width: 55%; display: block; margin: 0 auto; margin-top: 20px; margin-bottom: 20px;"></img>

Arsitektur kami dirancang dengan pendekatan _serverless_ dan _managed services_ untuk efisiensi operasional dan skalabilitas otomatis. Ini memungkinkan tim kami untuk fokus pada pengembangan fitur daripada manajemen infrastruktur.

### Komponen Utama Arsitektur:

1.  **Cloud Run:**
    * **Peran:** Sebagai _compute engine_ utama untuk menjalankan kontainer aplikasi backend Flask kami.
    * **Alasan:** Cloud Run menyediakan lingkungan _serverless_, yang berarti kami hanya membayar saat ada permintaan masuk (_pay-per-use_). Skalabilitasnya otomatis, dari nol hingga ribuan permintaan, tanpa perlu provisi server manual.

2.  **Cloud Storage:**
    * **Peran:** Menyimpan semua aset statis, terutama gambar bahan makanan yang diunggah oleh pengguna.
    * **Alasan:** Merupakan solusi penyimpanan objek yang sangat tahan lama, aman, dan berbiaya rendah, serta terintegrasi sempurna dengan layanan GCP lainnya.

3.  **Cloud Vision AI / Custom ML Model:**
    * **Peran:** Inti dari fitur cerdas kami. Digunakan untuk menganalisis dan mengidentifikasi jenis bahan makanan dari gambar yang diunggah pengguna.
    * **Alasan:** Memanfaatkan model AI canggih dari Google untuk akurasi tinggi. Jika menggunakan model kustom, kami juga dapat melatih dan menyajikannya melalui **Vertex AI**.

4.  **API Gateway:**
    * **Peran:** Bertindak sebagai pintu gerbang utama untuk semua permintaan ke backend API kami.
    * **Alasan:** Menyediakan fitur krusial seperti autentikasi, _rate limiting_, dan monitoring, sehingga meningkatkan keamanan dan pengelolaan API secara keseluruhan.

5.  **Firestore / Cloud SQL:**
    * **Peran:** Sebagai database untuk menyimpan data pengguna, riwayat rekomendasi, dan resep.
    * **Alasan:** **Firestore** (NoSQL) dipilih untuk fleksibilitas skema data, sedangkan **Cloud SQL** (Relational) dapat menjadi alternatif jika struktur data sangat terdefinisi. Keduanya adalah layanan terkelola penuh (_fully managed_).

