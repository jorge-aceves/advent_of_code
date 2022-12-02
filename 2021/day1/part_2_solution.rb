def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
arr = read_file(file_name).split("\n").map(&:to_i)
total = arr[0] + arr[1] + arr[2]
last = total
sum = 0
for i in 3...arr.size do
  total -= arr[i-3]
  total += arr[i]
  sum += 1 if total > last
  last = total
end
puts sum