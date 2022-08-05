using System.Data.SqlClient;
using System.Reflection;

namespace SpikeTests.UnitTestsProves {
    public class SqlExceptiionMockTests {
        [SetUp]
        public void Setup() {
        }

        private SqlException GetSqlException() {
            SqlErrorCollection collection = Construct<SqlErrorCollection>();
            SqlError error = Construct<SqlError>(-2, (byte)2, (byte)3, "server name", "error message", "proc", 100, (uint)1, new Exception());            

            typeof(SqlErrorCollection)
                .GetMethod("Add", BindingFlags.NonPublic | BindingFlags.Instance)
                .Invoke(collection, new object[] { error });

            var e = typeof(SqlException)
                .GetMethod("CreateException", BindingFlags.NonPublic | BindingFlags.Static, null, CallingConventions.ExplicitThis, new[] { typeof(SqlErrorCollection), typeof(string) }, new ParameterModifier[] { })
                .Invoke(null, new object[] { collection, "11.0.0" }) as SqlException;

            return e;
        }

        private T Construct<T>(params object[] p) {
            ConstructorInfo[] returnContructor = typeof(T).GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance);
            return (T)returnContructor[0].Invoke(p);
        }

        [Test]
        public void SqlExceptiionMock_WhenTrow_IsWithNoError() {
            var sqlException = GetSqlException();
            
            Assert.IsNotNull(sqlException);
        }

        [TearDown]
        public void TearDown() {
        }
    }
}