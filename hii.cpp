#include <iostream>
#include <map>
using namespace std;

int main() {
    
    // Creating an empty map
    map<int, string> m1;

    // Initialze map with list
    map<int, string> m2 = {{1, "Geeks"},
              {2, "For"}, {3, "Geeks"}};

    for (auto& p : m2)
        cout << p.first << endl;
    return 0;
}