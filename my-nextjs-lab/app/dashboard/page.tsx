import SettingsToggle from './SettingsToggle';

interface UserProfile {
  name: string;
  email: string;
  role: string;
}

async function getUserProfile(): Promise<UserProfile> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name: "Nguyễn Văn A",
    email: "vana@example.com",
    role: "Administrator"
  };
}

export default async function DashboardPage() {
  const userData = await getUserProfile();

  return (
    <div>
      <h1 style={{ color: '#1a1a1a', marginBottom: '20px' }}>User Profile (Server)</h1>
      
      {/* Box hiển thị thông tin profile với màu chữ đen đậm */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px',
        border: '1px solid #eaeaea',
        color: '#1a1a1a',
        lineHeight: '1.6'
      }}>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> <span style={{ color: '#d91e18' }}>{userData.role}</span></p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <SettingsToggle />
      </div>
    </div>
  );
}