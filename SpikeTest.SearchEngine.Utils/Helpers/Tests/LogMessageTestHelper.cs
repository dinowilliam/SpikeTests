﻿using System;

namespace MicroservicesSpike.Utils {
    public static class LogMessageTestHelper {

        public static string Title {
            get {
                return "Right Message";
            }
        }

        public static DateTime OccurrenceeInvalid {
            get {
                return DateTime.UtcNow;
            }
        }

        public static DateTime OccurrenceeValid {
            get {
                return new DateTime(2020, 12, 1, 0, 0, 0);
            }
        }

        public static string AccessLog {
            get {
                return new String("GET /~lpis/system/r-device/r_device_examples.html HTTP/1.0");
            }
        }

        public static string HttpMethod {
            get {
                return new String("GET");
            }
        }

        public static string HttpProtocol {
            get {
                return new String("HTTP/1.0");
            }
        }

        public static string Addresss {
            get {
                return new String("/~lpis/system/r-device/r_device_examples.html");
            }
        }

        public static int HttPResponse {
            get {
                return 304;
            }
        }

        public static int? Port {
            get {
                return 1459;
            }
        }
    }
}
