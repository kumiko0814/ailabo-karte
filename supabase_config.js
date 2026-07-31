// ============================================================
// Merone AI活用ラボ「AIカルテ」 Supabase 設定
// Re:alize / プロモボードと同じプロジェクトに相乗り。
// くみこがやることは「setup.html の SQL を1回貼るだけ」。
// ============================================================
const SUPABASE_CONFIG = {
  url: 'https://inrvprlyobghviklulcv.supabase.co',
  anonKey: 'sb_publishable_ZrCNcsRHMci-l7Fns8QtIA_X22XZGJp',
  get enabled() { return !!(this.url && this.anonKey); }
};
